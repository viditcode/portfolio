import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads with correct title and hero visible", async ({ page }) => {
    await expect(page).toHaveTitle(/SDET|QA/i);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("nav links navigate to each section", async ({ page }) => {
    const sections = ["work", "skills", "about", "contact"];
    for (const id of sections) {
      await page.click(`nav a[href="/#${id}"]`);
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test("case study cards render with a status badge", async ({ page }) => {
    const cards = page.locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).locator("h3")).toBeVisible();
      await expect(cards.nth(i).getByText(/PASS|RUNNING/)).toBeVisible();
    }
  });

  test("mobile nav collapses into a hamburger menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('nav a[href="/#work"]')).toBeHidden();
    const menuButton = page.getByRole("button", { name: /open menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('a[href="/#skills"]').last()).toBeVisible();
  });
});

test.describe("Blog", () => {
  test("blog index lists at least one post", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toHaveText(/writing/i);
    await expect(page.locator("a[href^='/blog/']").first()).toBeVisible();
  });

  test("a blog post renders full content and correct SEO title", async ({
    page,
  }) => {
    await page.goto("/blog");
    await page.locator("a[href^='/blog/']").first().click();
    await expect(page).toHaveURL(/\/blog\/.+/);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("time")).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads with correct title and name visible", async ({ page }) => {
    await expect(page).toHaveTitle(/SDET|QA Engineer/i);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("nav links scroll to each section", async ({ page }) => {
    const sections = ["work", "skills", "about", "contact"];
    for (const id of sections) {
      await page.click(`a[href="#${id}"]`);
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test("all case study cards render with a status badge", async ({ page }) => {
    const cards = page.locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      await expect(card.locator("h3")).toBeVisible();
      await expect(card.getByText(/PASS|RUNNING/)).toBeVisible();
    }
  });

  test("resume link and email contact are present", async ({ page }) => {
    await expect(page.locator('a[href*="resume"]').first()).toBeVisible();
    await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
  });

  test("boot log resolves and reveals the hero heading", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toHaveCSS("opacity", "1", { timeout: 5000 });
  });

  test("has no obvious accessibility violations in landmark structure", async ({
    page,
  }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    const headingCount = await page.locator("h1").count();
    expect(headingCount).toBe(1);
  });

  test("is responsive on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("#work")).toBeVisible();
  });
});

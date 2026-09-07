import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads with correct title and hero visible", async ({ page }) => {
    await expect(page).toHaveTitle(/SDET|QA/i);
    await expect(page.locator("h1")).toBeVisible();
  });
});

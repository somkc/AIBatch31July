import {expect, test} from '@playwright/test'

test('upload',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.pause();
await page.locator("#singleFileInput").setInputFiles("tests/file.txt");// single file
await page.locator("#multipleFilesInput").setInputFiles(["tests/file.txt","tests/file1.txt"])
await page.locator("//button[normalize-space()='Upload Multiple Files']").click();
await expect (page.locator("#multipleFilesStatus")).toContainText("Multiple files selected:");


})
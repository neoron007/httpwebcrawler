const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://sample.dev/path";
  const actual = normalizeURL(input);
  const expected = "sample.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slash", () => {
  const input = "https://sample.dev/path/";
  const actual = normalizeURL(input);
  const expected = "sample.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://sample.dev/path";
  const actual = normalizeURL(input);
  const expected = "sample.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip http/https", () => {
  const input = "https://sample.dev/path";
  const actual = normalizeURL(input);
  const expected = "sample.dev/path";
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://sample.dev/">
                Dev Blog
            </a>
        </body>
    </html>
    `;

  const inputBaseURL = "https://sample.dev/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://sample.dev/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = `
      <html>
          <body>
              <a href="/path/">
                  Dev Blog
              </a>
          </body>
      </html>
      `;

  const inputBaseURL = "https://sample.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://sample.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML invalid", () => {
  const inputHTMLBody = `
      <html>
          <body>
              <a href="invalid">
                  Dev Blog
              </a>
          </body>
      </html>
      `;

  const inputBaseURL = "https://sample.dev/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});

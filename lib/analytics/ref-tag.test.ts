import { test } from "node:test"
import assert from "node:assert/strict"
import { parseRefTag, stripRefTag } from "./ref-tag.ts"

test("parseRefTag reads and normalises the r param", () => {
  assert.equal(parseRefTag("?r=jane-acme"), "jane-acme")
  assert.equal(parseRefTag("?r=%20Jane-Acme%20"), "jane-acme")
  assert.equal(parseRefTag("?utm_source=gmail&r=Bob.Smith"), "bob.smith")
})

test("parseRefTag ignores missing, empty, invalid or overlong tags", () => {
  assert.equal(parseRefTag(""), null)
  assert.equal(parseRefTag("?utm_source=gmail"), null)
  assert.equal(parseRefTag("?r="), null)
  assert.equal(parseRefTag("?r=%3Cscript%3E"), null)
  assert.equal(parseRefTag("?r=" + "a".repeat(65)), null)
  assert.equal(parseRefTag("?r=" + "a".repeat(64)), "a".repeat(64))
})

test("stripRefTag removes only r and keeps path, other params and hash", () => {
  assert.equal(stripRefTag("https://www.ramplab.me/?r=jane"), "/")
  assert.equal(
    stripRefTag("https://www.ramplab.me/?r=x&utm_source=gmail"),
    "/?utm_source=gmail",
  )
  assert.equal(stripRefTag("https://www.ramplab.me/work/foo?r=x#top"), "/work/foo#top")
})

test("stripRefTag returns null when there is no r param", () => {
  assert.equal(stripRefTag("https://www.ramplab.me/work?utm_source=gmail"), null)
})

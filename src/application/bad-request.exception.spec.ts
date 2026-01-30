import { describe, expect, it } from "vitest";
import { BadRequestException } from "./bad-request.exception";

describe("Bad Request Exception", () => {
	it("should create an instance with default message", () => {
		const exception = new BadRequestException("User");
		expect(exception).toBeInstanceOf(Error);
		expect(exception.name).toBe("Bad Request");
		expect(exception.message).toBe("Bad request for the User application.");
		expect(exception.layerName).toBe("User");
	});

	it("should create an instance with custom message", () => {
		const exception = new BadRequestException("User", "Custom error");
		expect(exception.message).toBe("Custom error");
	});
});

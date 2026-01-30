import { describe, expect, it } from "vitest";
import { UnableToSignPayloadException } from "./unable-to-sign-payload.exception";

describe("UnableToSignPayload Exception", () => {
	it("should create an instance with default message", () => {
		const exception = new UnableToSignPayloadException("Application");
		expect(exception).toBeInstanceOf(Error);
		expect(exception.name).toBe("Unable to Sign Payload");
		expect(exception.message).toBe(
			"Unable to sign payload for the Application application.",
		);
		expect(exception.layerName).toBe("Application");
	});

	it("should create an instance with custom message", () => {
		const exception = new UnableToSignPayloadException(
			"Application",
			"Custom error",
		);
		expect(exception.message).toBe("Custom error");
	});
});

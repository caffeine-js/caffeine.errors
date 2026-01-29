import { describe, expect, it } from "vitest";
import { ForeignDependencyConstraintException } from "./foreign-dependency-constraint.exception";

describe("Foreign Dependency Constraint Exception", () => {
	it("should create an instance with default message", () => {
		const resource = "User";
		const dependency = "Posts";
		const layerName = "PostgreSQL";
		const exception = new ForeignDependencyConstraintException(
			resource,
			dependency,
			layerName,
		);

		expect(exception).toBeInstanceOf(Error);
		expect(exception).toBeInstanceOf(ForeignDependencyConstraintException);
		expect(exception.name).toBe("Foreign Dependency Constraint Exception");
		expect(exception.message).toBe(
			`Cannot delete ${resource} because it is associated with existing ${dependency} records.`,
		);
		expect(exception.layerName).toBe(layerName);
	});

	it("should create an instance with custom message", () => {
		const customMessage = "Custom error message";
		const exception = new ForeignDependencyConstraintException(
			"User",
			"Posts",
			"PostgreSQL",
			customMessage,
		);

		expect(exception.message).toBe(customMessage);
		expect(exception.layerName).toBe("PostgreSQL");
	});
});

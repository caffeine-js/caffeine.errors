import { ApplicationException } from "@/models";

export class InvalidJWTException extends ApplicationException {
	public readonly name = "Invalid JWT";

	constructor(
		public layerName: string,
		public message: string = `Invalid JWT for the ${layerName} application.`,
	) {
		super(message);
	}
}

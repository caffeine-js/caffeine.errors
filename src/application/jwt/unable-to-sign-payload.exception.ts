import { ApplicationException } from "@/models";

export class UnableToSignPayloadException extends ApplicationException {
	public readonly name = "Unable to Sign Payload";

	constructor(
		public layerName: string,
		public message: string = `Unable to sign payload for the ${layerName} application.`,
	) {
		super(message);
	}
}

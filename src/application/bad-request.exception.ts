import { ApplicationException } from "@/models";

export class BadRequestException extends ApplicationException {
	public readonly name = "Bad Request";

	constructor(
		public layerName: string,
		public message: string = `Bad request for the ${layerName} application.`,
	) {
		super(message);
	}
}

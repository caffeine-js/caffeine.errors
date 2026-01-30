import { ApplicationException } from "@/models";

export class UnauthorizedException extends ApplicationException {
	public readonly name = "Unauthorized";

	constructor(
		public layerName: string,
		public message: string = `Unauthorized access to the ${layerName} application.`,
	) {
		super(message);
	}
}

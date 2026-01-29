import { ApplicationException } from "@/models";

export class ResourceAlreadyExistsException extends ApplicationException {
	public readonly name = "Resource Already Exists";

	constructor(
		public layerName: string,
		public message: string = `Resource already exists in the ${layerName} domain.`,
	) {
		super(message);
	}
}

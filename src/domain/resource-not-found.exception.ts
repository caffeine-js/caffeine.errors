import { DomainException } from "@/models";

export class ResourceNotFoundException extends DomainException {
	public readonly name = "Resource Not Found";

	constructor(
		public layerName: string,
		public message: string = `Resource not found in the ${layerName} domain.`,
	) {
		super(message);
	}
}

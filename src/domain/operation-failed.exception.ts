import { DomainException } from "@/models";

export class OperationFailedException extends DomainException {
	public readonly name = "Operation Failed";

	constructor(
		public layerName: string,
		public message: string = `Operation failed in the ${layerName} domain.`,
	) {
		super(message);
	}
}

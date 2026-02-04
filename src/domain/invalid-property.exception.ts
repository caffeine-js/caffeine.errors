import { DomainException } from "@/models";

export class InvalidPropertyException extends DomainException {
	public readonly name = "Invalid Property";

	constructor(
		public readonly property: string,
		public readonly layerName: string,
		public readonly message: string = `The property '${property}' in ${layerName} is invalid.`,
	) {
		super(message);
	}
}

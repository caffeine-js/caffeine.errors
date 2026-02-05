import { InfraException } from "@/models";

export class UnexpectedCacheValueException extends InfraException {
	public readonly name = "Unexpected Cache Value Exception";

	constructor(
		public readonly key: string,
		public readonly layerName: string,
		public readonly message: string = `The value from cache for key '${key}' was unexpected.`,
	) {
		super(message);
	}
}

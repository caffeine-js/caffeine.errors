import { CoreException, type CoreExceptionType } from "./core";

export class InvalidEntityData extends CoreException {
	protected layer: CoreExceptionType = "internal";
	public name: string = "Invalid Entity Data";
	public override layerName: string = "$internal";

	constructor(public message: string = "The entity validation failed.") {
		super(message);
	}
}

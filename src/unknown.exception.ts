import { CoreException, type CoreExceptionType } from "./core";

export class UnknownException extends CoreException {
	protected layer: CoreExceptionType = "internal";
	public name: string = "Unknown Error";
	public override layerName: string = "$internal";

	constructor(public message: string = "An unknown error has occurred.") {
		super(message);
	}
}

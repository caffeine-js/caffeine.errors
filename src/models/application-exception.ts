import { CoreException, type CoreExceptionType } from "../core";

export abstract class ApplicationException extends CoreException {
	protected readonly layer: CoreExceptionType = "application";
}

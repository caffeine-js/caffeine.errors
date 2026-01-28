import { CoreException, type CoreExceptionType } from "../core";

export abstract class DomainException extends CoreException {
	protected readonly layer: CoreExceptionType = "domain";
}

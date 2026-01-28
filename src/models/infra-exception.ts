import { CoreException, type CoreExceptionType } from "../core";

export abstract class InfraException extends CoreException {
	protected readonly layer: CoreExceptionType = "infra";
}

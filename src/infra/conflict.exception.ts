import { InfraException } from "@/models";

export class ConflictException extends InfraException {
	public name: string = "Conflict Exception";

	constructor(
		public source: string,
		public message: string = "A conflict occurred in the database.",
	) {
		super(message);
	}
}

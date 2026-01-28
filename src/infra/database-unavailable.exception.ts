import { InfraException } from "@/models";

export class DatabaseUnavailableException extends InfraException {
	public name: string = "Database Unavailable Exception";

	constructor(
		public layerName: string,
		public message: string = "The database is currently unavailable.",
	) {
		super(message);
	}
}

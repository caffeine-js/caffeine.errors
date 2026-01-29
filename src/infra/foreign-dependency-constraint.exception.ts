import { InfraException } from "@/models";

export class ForeignDependencyConstraintException extends InfraException {
	public name: string = "Foreign Dependency Constraint Exception";

	constructor(
		resource: string,
		dependency: string,
		public layerName: string,
		public message: string = `Cannot delete ${resource} because it is associated with existing ${dependency} records.`,
	) {
		super(message);
	}
}

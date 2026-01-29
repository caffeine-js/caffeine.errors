import { InfraException } from "@/models";

export class ForeignDependencyConstraintException extends InfraException {
	public name: string = "Foreign Dependency Constraint Exception";

	constructor(
		public layerName: string,
		public message: string = `It was not possible to remove the ${layerName} resource due to its usefulness in other domains.`,
	) {
		super(message);
	}
}

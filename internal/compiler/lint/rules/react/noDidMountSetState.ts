import {createVisitor, signals} from "@internal/compiler";
import {descriptions} from "@internal/diagnostics";
import {doesNodeMatchPattern, isConditional} from "@internal/js-ast-utils";
import {insideClassComponent} from "../../utils/react";

export default createVisitor({
	name: "react/noDidMountSetState",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSClassMethod" &&
			node.key.type === "JSStaticPropertyKey" &&
			node.key.value.type === "JSIdentifier" &&
			node.key.value.name === "componentDidMount" &&
			insideClassComponent(path)
		) {
			path.traverse(
				"body",
				(childPath) => {
					const childNode = childPath.node;
					if (
						doesNodeMatchPattern(childNode, "this.setState") &&
						childPath.findAncestry((ancesPath) => isConditional(ancesPath.node)) ===
						undefined
					) {
						childPath.context.addNodeDiagnostic(
							childNode,
							descriptions.LINT.REACT_NO_DID_MOUNT_SET_STATE,
						);
					}
				},
			);
		}

		return signals.retain;
	},
});

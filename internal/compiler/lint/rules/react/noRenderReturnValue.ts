import {descriptions} from "@internal/diagnostics";
import {createVisitor, signals} from "@internal/compiler";
import {doesNodeMatchReactPattern} from "../../utils/react";

export default createVisitor({
	name: "react/noRenderReturnValue",

	enter(path) {
		const {node, parent, scope} = path;

		if (
			node.type === "JSCallExpression" &&
			parent.type !== "JSExpressionStatement" &&
			doesNodeMatchReactPattern(
				node.callee,
				scope,
				"ReactDOM.render",
				{
					packageName: "react-dom",
					importName: "ReactDOM",
				},
			)
		) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.REACT_NO_RENDER_RETURN_VALUE,
			);
		}

		return signals.retain;
	},
});

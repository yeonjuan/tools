/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createVisitor, signals} from "@internal/compiler";
import {descriptions} from "@internal/diagnostics";

export default createVisitor({
	name: "js/noCatchAssign",
	enter(path) {
		const {node} = path;

		if (node.type === "JSCatchClause") {
			path.traverse(
				"body",
				(childPath) => {
					const child = childPath.node;
					const scope = childPath.scope;
					const context = childPath.context;
					if (child.type === "JSAssignmentIdentifier") {
						const binding = scope.getBinding(child.name);

						if (binding?.kind === "catch") {
							context.addNodeDiagnostic(
								child,
								descriptions.LINT.JS_NO_CATCH_ASSIGN,
							);
						}
					}
				},
			);
		}

		return signals.retain;
	},
});

/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import {createVisitor, signals} from "@internal/compiler";
import {descriptions} from "@internal/diagnostics";
import {doesNodeMatchPattern, isConditional} from "@internal/js-ast-utils";
import {insideClassComponent} from "../../utils/react";

export default createVisitor({
	name: "react/noDidUpdateSetState",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSClassMethod" &&
			node.key.type === "JSStaticPropertyKey" &&
			node.key.value.type === "JSIdentifier" &&
			node.key.value.name === "componentDidUpdate" &&
			insideClassComponent(path)
		) {
			path.traverse(
				"body",
				(childPath) => {
					const childNode = childPath.node;
					if (
						doesNodeMatchPattern(childNode, "this.setState") &&
						childPath.findAncestry(({node}) => isConditional(node)) ===
						undefined
					) {
						childPath.context.addNodeDiagnostic(
							childNode,
							descriptions.LINT.REACT_NO_DID_UPDATE_SET_STATE,
						);
					}
				},
			);
		}

		return signals.retain;
	},
});

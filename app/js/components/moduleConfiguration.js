moduleConfiguration.$inject = ['$compileProvider'];
function moduleConfiguration ($compileProvider) {
	$compileProvider.preAssignBindingsEnabled(true);
}
(function () {

    'use strict';

    angular
        .module('app')
        .controller('AdminDocumentsCtrl', AdminDocumentsCtrl);

    AdminDocumentsCtrl.$inject = ['DocumentsService', '$scope'];

    function AdminDocumentsCtrl(DocumentsService, $scope) {
        var ctrl = this;
        ctrl.showErrorMessage = false;
        
        ctrl.documents = [];
        DocumentsService.getDocuments().then(function (data) {
            ctrl.documents = data;
        });

        ctrl.uploadDocuments = function() {
            for (var i = 0; i < ctrl.files.length; i++) {
                uploadDocument(ctrl.files[i]);
            }
        };

        ctrl.deleteDocument = function(id) {
            DocumentsService.deleteDocument(id).then(function (data) {
                ctrl.documents = ctrl.documents.filter(function (docObj) {
                    return docObj._id != id;
                });
            }, function (error) {
                ctrl.showErrorMessage = true;
                ctrl.errorMessage = "Fehler beim Löschen des Dokuments.";
            });
        };

        $scope.setFiles = function (fileInput) {
            ctrl.files = fileInput.files;
        };

        function uploadDocument(docFile) {
            var reader  = new FileReader();
            reader.onloadend = function () {
                var docObj = {
                    binaryString: reader.result,
                    name: docFile.name
                };
                DocumentsService.uploadDocument(docObj).then(function (data) {
                    docObj._id = data.newDoc._id;
                    ctrl.documents.push(docObj);
                }, function (error) {
                    ctrl.showErrorMessage = true;
                    ctrl.errorMessage = "Es konnten nicht alle Dokumente gespeichert werden.";
                });
            };
            reader.readAsBinaryString(docFile);
        }
    }
})();
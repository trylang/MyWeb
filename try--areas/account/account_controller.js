// 我的页面
angular.module('account.controller', ['account.service'])
    .controller('AccountCtrl', function($scope, $window, AccountFty,
        $cordovaCamera, $ionicPopup, $ionicActionSheet) {

        $scope.AlertPopup = function(message) {
            var alertPopup = $ionicPopup.alert({
                title: '提示',
                template: message
            });
            alertPopup.then(function(res) {
                console.log('');
            });
        }

        // 调用摄像头功能
        $scope.func_showAction = function() {

            // 显示操作表,$ionicActionSheet组件
            $ionicActionSheet.show({
                buttons: [
                    { text: '照相机' },
                    { text: '图库' },
                ],
                titleText: '请选择文件源',
                cancelText: '取消',
                buttonClicked: function(index) {
                    // 对应buttons数组中的索引值
                    switch (index) {
                        case 0:
                            func_getPicFromCamera();
                            break;
                        case 1:
                            func_getPicFromPicture();
                            break;
                    }
                    return true;
                }
            });
        }


        // 从摄像头获取图片
        var func_getPicFromCamera = function() {

            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('touxiang');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                //$scope.AlertPopup(err);
            });
        }

        // 从图库获取图片
        var func_getPicFromPicture = function() {

            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('touxiang');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                //$scope.AlertPopup(err);
            });
        }

        // 打电话
        $scope.callPhone = function(number) {
            $window.location.href = "tel:" + number;
        }

        // 退出
        $scope.func_exitApp = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: "真要关掉我么？╥﹏╥..."
            });
            confirmPopup.then(function(res) {
                if (res) {
                    ionic.Platform.exitApp();
                }
            });

        }
    })

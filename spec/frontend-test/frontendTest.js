'use stict';

describe('A suite', function () {
  it('contains spec with an expectation', function () {
    expect(true).toBe(true);
  });
});

describe('MainController', function () {
  var $scope;
  var $controller;
  var MainController;

  beforeEach(module('UHU'));

  beforeEach(inject(function (_$controller_, $rootScope) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    MainController = $controller('MainController', { $scope: $scope });
  }));

  it('should exist', function () {
    expect(MainController).toBeDefined();
  });
});

describe('addNewCall', function () {
  var $scope;
  var $controller;
  var addNewCall;

  beforeEach(module('UHU'));

  beforeEach(inject(function (_$controller_, $rootScope) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    addNewCall = $controller('addNewCall', { $scope: $scope });
  }));

  it('should exist', function () {
    expect(addNewCall).toBeDefined();
  });
});

describe('ListCtrl', function () {
  var $scope;
  var $controller;
  var ListCtrl;

  beforeEach(module('UHU'));

  beforeEach(inject(function (_$controller_, $rootScope) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    ListCtrl = $controller('ListCtrl', { $scope: $scope });
  }));

  it('should exist', function () {
    expect(ListCtrl).toBeDefined();
  });

  it('calls should be an object', function () {
    expect($scope.calls).toBeDefined({});
  });

  it('calls status should be ended', function () {
    expect($scope.calls[0].status).toEqual('ongoing');
  });
});

describe('newCallService test', function () {
  var newCallService;
  beforeEach(module('UHU'));
  beforeEach(inject(function (_newCallService_) {
      newCallService = _newCallService_;
    }));

  it('should exist', function () {
    expect(newCallService).toBeDefined();
  });

  it('getCalls should return with this.calls', function () {
    expect(newCallService.getCalls).toBeDefined();
  });

  it('newCall should return with this.calls', function () {
    expect(newCallService.newCall).toBeDefined();
  });

  it('newCall should push call to calls', function () {
    var call = { id:6 };
    newCallService.newCall(call);
    expect(newCallService.calls.length).toBe(7);
  });

  it('getCalls should be 6', function () {
    var calls = newCallService.getCalls;
    newCallService.getCalls();
    expect(newCallService.calls.length).toBe(7);
  });
});

describe('directive tests', function () {
  var $compile;
  var $scope;

  beforeEach(module('UHU'));
  beforeEach(module('templates'));
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
  }));

  it('Replaces the element with the appropriate content', function () {
    $scope.call = { userId: 'mcdonalds' };
    var element = $compile('<call call="call"></call>')($scope);
    $scope.$digest();
    expect(element.html()).toContain('mcdonalds');
  });

  it('Replaces the source phone number with the appropriate phone number', function () {
    $scope.call = { source: '555-717-2' };
    var element = $compile('<call call="call"></call>')($scope);
    $scope.$digest();
    expect(element.html()).toContain('555-717-2');
  });

  it('Replaces the status element with the appropriate status image', function () {
    $scope.call = { status: 'ongoing' };
    var element = $compile('<call call="call"></call>')($scope);
    $scope.$digest();
    expect(element.html()).toContain('ongoing.svg');
  });

  it('Fill the object with the list of calls', function () {
    $scope.call = {};
    var element = $compile('<listcalls calls="calls"></listcalls>')($scope);
    $scope.$digest();
    expect(element.html()).toContain('calls.length');
  });
});

describe('chart test', function () {
  var $scope;
  var $controller;
  var chartCtrl;
  var arrayTransformator;

  beforeEach(module('UHU'));

  beforeEach(inject(function (_$controller_, $rootScope) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    chartCtrl = $controller('chartCtrl', { $scope: $scope });
  }));

  it('should exist', function () {
    expect(chartCtrl).toBeDefined();
  });

  it('should call newcall method as chartdata', function () {
    expect($scope.chartdata).toEqual([[ 0, 1, 0, 0, 0, 0, 1 ], [ 0, 1, 0, 0, 0, 0, 1 ]]);
  });
});

"use strict";
(() => {
var exports = {};
exports.id = 360419;
exports.ids = [360419,890636];
exports.modules = {

/***/ 48277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(860076);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_gitService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712473);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var ChangesTab = () => {
  var [gitStatus, setGitStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [remotes, setRemotes] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [commitHistory, setCommitHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var [repositoryInfo, setRepositoryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  var [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('changes');
  var [commitMessage, setCommitMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [showCommitModal, setShowCommitModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchGitData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
        setIsLoading(true);
        try {
          var [status, branchesData, remotesData, commitsData] = yield Promise.all([_services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus(), _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getBranches(), _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getRemotes(), _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getCommitHistory(10)]);
          setGitStatus(status);
          setBranches(branchesData);
          setRemotes(remotesData);
          setCommitHistory(commitsData);

          // Determine repository status
          var repoStatus = 'clean';
          if (status.ahead > 0 && status.behind > 0) {
            repoStatus = 'diverged';
          } else if (status.ahead > 0) {
            repoStatus = 'ahead';
          } else if (status.behind > 0) {
            repoStatus = 'behind';
          } else if (!status.isClean) {
            repoStatus = 'dirty';
          }
          setRepositoryInfo({
            name: 'zion.app',
            remote: 'origin',
            status: repoStatus
          });
        } catch (error) {
          // Handle error silently or implement proper error handling
          console.warn('Failed to fetch Git data:', error);
        } finally {
          setIsLoading(false);
        }
      });
      return function fetchGitData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchGitData();
  }, []);
  var getStatusColor = status => {
    switch (status) {
      case 'clean':
        return 'text-green-400';
      case 'dirty':
        return 'text-yellow-400';
      case 'ahead':
        return 'text-blue-400';
      case 'behind':
        return 'text-orange-400';
      case 'diverged':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };
  var getStatusIcon = status => {
    switch (status) {
      case 'clean':
        return '✅';
      case 'dirty':
        return '⚠️';
      case 'ahead':
        return '⬆️';
      case 'behind':
        return '⬇️';
      case 'diverged':
        return '🔄';
      default:
        return '❓';
    }
  };
  var handleStageFile = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (filePath) {
      try {
        yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.stageFile(filePath);
        // Refresh data
        var newStatus = yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus();
        setGitStatus(newStatus);
      } catch (error) {
        // Handle error silently or implement proper error handling
        console.warn('Failed to stage file:', error);
      }
    });
    return function handleStageFile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleUnstageFile = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* (filePath) {
      try {
        yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.unstageFile(filePath);
        // Refresh data
        var newStatus = yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus();
        setGitStatus(newStatus);
      } catch (error) {
        // Handle error silently or implement proper error handling
        console.warn('Failed to unstage file:', error);
      }
    });
    return function handleUnstageFile(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleCommitChanges = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      if (!commitMessage.trim()) return;
      try {
        yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.commitChanges(commitMessage);
        setCommitMessage('');
        setShowCommitModal(false);

        // Refresh data
        var [newStatus, newCommits] = yield Promise.all([_services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus(), _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getCommitHistory(10)]);
        setGitStatus(newStatus);
        setCommitHistory(newCommits);
      } catch (error) {
        // Handle error silently or implement proper error handling
        console.warn('Failed to commit changes:', error);
      }
    });
    return function handleCommitChanges() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handlePushChanges = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      try {
        yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.pushToRemote();
        // Refresh data
        var newStatus = yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus();
        setGitStatus(newStatus);
      } catch (error) {
        // Handle error silently or implement proper error handling
        console.warn('Failed to push changes:', error);
      }
    });
    return function handlePushChanges() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handlePullChanges = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(function* () {
      try {
        yield _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.pullFromRemote();
        // Refresh data
        var [newStatus, newBranches] = yield Promise.all([_services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getStatus(), _services_gitService__WEBPACK_IMPORTED_MODULE_1__.gitService.getBranches()]);
        setGitStatus(newStatus);
        setBranches(newBranches);
      } catch (error) {
        // Handle error silently or implement proper error handling
        console.warn('Failed to pull changes:', error);
      }
    });
    return function handlePullChanges() {
      return _ref6.apply(this, arguments);
    };
  }();
  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "min-h-screen bg-gray-900 text-white p-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "animate-pulse",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-8 bg-gray-700 rounded w-1/4 mb-6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-64 bg-gray-800 rounded mb-4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-32 bg-gray-800 rounded"
          })]
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "min-h-screen bg-gray-900 text-white p-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "mb-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4",
          children: "Repository Changes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center space-x-4 text-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-gray-400",
            children: "Repository:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-white font-mono",
            children: repositoryInfo === null || repositoryInfo === void 0 ? void 0 : repositoryInfo.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-gray-400",
            children: "Branch:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "text-white font-mono",
            children: gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.branch
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: "flex items-center space-x-2 ".concat(getStatusColor((repositoryInfo === null || repositoryInfo === void 0 ? void 0 : repositoryInfo.status) || 'clean')),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: getStatusIcon((repositoryInfo === null || repositoryInfo === void 0 ? void 0 : repositoryInfo.status) || 'clean')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "capitalize",
              children: repositoryInfo === null || repositoryInfo === void 0 ? void 0 : repositoryInfo.status
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex space-x-1 mb-6 bg-gray-800 p-1 rounded-lg",
        children: [{
          id: 'changes',
          label: 'Changes',
          icon: '📝'
        }, {
          id: 'history',
          label: 'History',
          icon: '📚'
        }, {
          id: 'branches',
          label: 'Branches',
          icon: '🌿'
        }, {
          id: 'remotes',
          label: 'Remotes',
          icon: '🌐'
        }].map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          onClick: () => setActiveTab(tab.id),
          className: "flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ".concat(activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-700'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: tab.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: tab.label
          })]
        }, tab.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "bg-gray-800 rounded-lg p-6 border border-gray-700",
        children: [activeTab === 'changes' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-lg font-semibold mb-3 text-blue-400",
              children: "Repository Status"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-green-400",
                  children: "\u25CF"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Staged:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: "text-white",
                  children: [(gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.staged.length) || 0, " files"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-yellow-400",
                  children: "\u25CF"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Modified:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: "text-white",
                  children: [(gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.unstaged.length) || 0, " files"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-red-400",
                  children: "\u25CF"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-gray-400",
                  children: "Untracked:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: "text-white",
                  children: [(gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.untracked.length) || 0, " files"]
                })]
              })]
            }), (gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.ahead) && gitStatus.ahead > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "mt-3 text-blue-400 text-sm",
              children: ["\u2B06\uFE0F ", gitStatus.ahead, " commits ahead of origin/", gitStatus.branch]
            })]
          }), (gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.staged.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-lg font-semibold mb-3 text-green-400",
              children: "Staged Changes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-2",
              children: gitStatus.staged.map((file, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center justify-between bg-gray-600 rounded px-3 py-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-white font-mono text-sm",
                  children: file.path
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                  onClick: () => handleUnstageFile(file.path),
                  className: "text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors",
                  children: "Unstage"
                })]
              }, index))
            })]
          }), (gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.unstaged.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-lg font-semibold mb-3 text-yellow-400",
              children: "Modified Files"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-2",
              children: gitStatus.unstaged.map((file, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center justify-between bg-gray-600 rounded px-3 py-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-white font-mono text-sm",
                  children: file.path
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                    onClick: () => handleStageFile(file.path),
                    className: "text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors",
                    children: "Stage"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                    className: "text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors",
                    children: "View Diff"
                  })]
                })]
              }, index))
            })]
          }), (gitStatus === null || gitStatus === void 0 ? void 0 : gitStatus.untracked.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "text-lg font-semibold mb-3 text-red-400",
              children: "Untracked Files"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-2",
              children: gitStatus.untracked.map((file, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center justify-between bg-gray-600 rounded px-3 py-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "text-white font-mono text-sm",
                  children: file.path
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                  onClick: () => handleStageFile(file.path),
                  className: "text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors",
                  children: "Add"
                })]
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex space-x-4 pt-4 border-t border-gray-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => setShowCommitModal(true),
              disabled: !(gitStatus !== null && gitStatus !== void 0 && gitStatus.staged.length),
              className: "px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors",
              children: "Commit Changes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: handlePushChanges,
              disabled: !(gitStatus !== null && gitStatus !== void 0 && gitStatus.ahead),
              className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors",
              children: "Push to Origin"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: handlePullChanges,
              disabled: !(gitStatus !== null && gitStatus !== void 0 && gitStatus.behind),
              className: "px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors",
              children: "Pull from Origin"
            })]
          })]
        }), activeTab === 'history' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-lg font-semibold mb-3 text-blue-400",
            children: "Recent Commits"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-3",
              children: commitHistory.map(commit => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-start space-x-3 p-3 bg-gray-600 rounded",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "w-2 h-2 bg-blue-400 rounded-full mt-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-white font-semibold",
                    children: commit.message
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "text-gray-400 text-sm mt-1",
                    children: [commit.author, " \u2022 ", commit.date]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-gray-500 font-mono text-xs mt-1",
                    children: commit.hash
                  }), commit.files.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "text-gray-400 text-xs mt-2",
                    children: ["Files: ", commit.files.join(', ')]
                  })]
                })]
              }, commit.hash))
            })
          })]
        }), activeTab === 'branches' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-lg font-semibold mb-3 text-blue-400",
            children: "Branches"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-2",
              children: branches.map(branch => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center justify-between p-3 rounded ".concat(branch.isCurrent ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-gray-600'),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: branch.isCurrent ? 'text-blue-400' : 'text-gray-400',
                    children: branch.isCurrent ? '●' : '○'
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "font-semibold ".concat(branch.isCurrent ? 'text-white' : 'text-gray-300'),
                    children: branch.name
                  }), branch.isCurrent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "text-blue-400 text-sm",
                    children: "(current)"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "text-right",
                  children: [branch.ahead > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "text-blue-400 text-sm",
                    children: ["\u2B06\uFE0F ", branch.ahead, " ahead"]
                  }), branch.behind > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "text-orange-400 text-sm",
                    children: ["\u2B07\uFE0F ", branch.behind, " behind"]
                  }), branch.ahead === 0 && branch.behind === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-green-400 text-sm",
                    children: "\u2713 Up to date"
                  })]
                })]
              }, branch.name))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors",
              children: "Create New Branch"
            })]
          })]
        }), activeTab === 'remotes' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "text-lg font-semibold mb-3 text-blue-400",
            children: "Remote Repositories"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "bg-gray-700 rounded-lg p-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "space-y-3",
              children: remotes.map(remote => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex items-center justify-between p-3 bg-gray-600 rounded",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-white font-semibold",
                    children: remote.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-gray-400 text-sm",
                    children: remote.url
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "text-right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-green-400 text-sm",
                    children: "Connected"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "text-gray-400 text-xs",
                    children: remote.type
                  })]
                })]
              }, remote.name))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors",
              children: "Add Remote"
            })]
          })]
        })]
      })]
    }), showCommitModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 border border-gray-700",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "text-xl font-semibold text-white mb-4",
          children: "Commit Changes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              className: "block text-sm font-medium text-gray-300 mb-2",
              children: "Commit Message"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea", {
              value: commitMessage,
              onChange: e => setCommitMessage(e.target.value),
              placeholder: "Enter commit message...",
              className: "w-full h-24 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex space-x-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: handleCommitChanges,
              disabled: !commitMessage.trim(),
              className: "flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-colors",
              children: "Commit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              onClick: () => {
                setShowCommitModal(false);
                setCommitMessage('');
              },
              className: "flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md transition-colors",
              children: "Cancel"
            })]
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangesTab);

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 660791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(705649);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/changes",
        pathname: "/changes",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/changes",
    config,
    userland: private_next_pages_changes_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 705649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangesPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_ChangesTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48277);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ChangesPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
        children: "Repository Changes \u2014 Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "description",
        content: "View and manage your repository changes, Git status, and version control operations."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:title",
        content: "Repository Changes \u2014 Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:description",
        content: "View and manage your repository changes, Git status, and version control operations."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_layout_ChangesTab__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}

/***/ }),

/***/ 712473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gitService: () => (/* binding */ gitService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(860076);

class GitService {
  executeGitCommand(command) {
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // In a real implementation, this would execute Git commands
        // For now, we'll return mock data
        return "mock-git-".concat(command);
      } catch (error) {
        console.error("Git command failed: ".concat(command), error);
        throw error;
      }
    })();
  }
  getStatus() {
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Mock implementation - replace with actual Git commands
      var mockStatus = {
        branch: 'main',
        ahead: 2,
        behind: 0,
        staged: [{
          path: 'src/components/Header.tsx',
          status: 'staged'
        }, {
          path: 'src/pages/index.tsx',
          status: 'staged'
        }],
        unstaged: [{
          path: 'src/components/Footer.tsx',
          status: 'modified'
        }, {
          path: 'package.json',
          status: 'modified'
        }],
        untracked: [{
          path: 'new-feature.tsx',
          status: 'untracked'
        }, {
          path: 'docs/README.md',
          status: 'untracked'
        }],
        lastCommit: {
          hash: 'a1b2c3d4',
          message: 'feat: Add new authentication system',
          author: 'Developer Name',
          date: '2025-01-17 14:30:00',
          files: ['src/auth/', 'src/components/']
        },
        isClean: false
      };
      return mockStatus;
    })();
  }
  getBranches() {
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var mockBranches = [{
        name: 'main',
        isCurrent: true,
        ahead: 2,
        behind: 0,
        lastCommit: 'a1b2c3d4'
      }, {
        name: 'develop',
        isCurrent: false,
        ahead: 0,
        behind: 0,
        lastCommit: 'e5f6g7h8'
      }, {
        name: 'feature/auth-system',
        isCurrent: false,
        ahead: 5,
        behind: 0,
        lastCommit: 'i9j0k1l2'
      }];
      return mockBranches;
    })();
  }
  getRemotes() {
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var mockRemotes = [{
        name: 'origin',
        url: 'https://github.com/username/zion.app.git',
        type: 'HTTPS'
      }, {
        name: 'upstream',
        url: 'git@github.com:organization/zion.app.git',
        type: 'SSH'
      }];
      return mockRemotes;
    })();
  }
  getCommitHistory() {
    var _arguments = arguments;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var limit = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 10;
      var mockCommits = [{
        hash: 'a1b2c3d4',
        message: 'feat: Add new authentication system',
        author: 'Developer Name',
        date: '2025-01-17 14:30:00',
        files: ['src/auth/', 'src/components/']
      }, {
        hash: 'e5f6g7h8',
        message: 'fix: Resolve header navigation issue',
        author: 'Developer Name',
        date: '2025-01-17 12:15:00',
        files: ['src/components/Header.tsx']
      }, {
        hash: 'i9j0k1l2',
        message: 'docs: Update README with new features',
        author: 'Developer Name',
        date: '2025-01-17 10:00:00',
        files: ['README.md', 'docs/']
      }];
      return mockCommits.slice(0, limit);
    })();
  }
  stageFile(filePath) {
    var _this = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.executeGitCommand("git add \"".concat(filePath, "\""));
      } catch (error) {
        console.error("Failed to stage file: ".concat(filePath), error);
        throw error;
      }
    })();
  }
  unstageFile(filePath) {
    var _this2 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.executeGitCommand("git reset HEAD \"".concat(filePath, "\""));
      } catch (error) {
        console.error("Failed to unstage file: ".concat(filePath), error);
        throw error;
      }
    })();
  }
  commitChanges(message) {
    var _this3 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var result = yield _this3.executeGitCommand("git commit -m \"".concat(message, "\""));
        return result;
      } catch (error) {
        console.error('Failed to commit changes', error);
        throw error;
      }
    })();
  }
  pushToRemote() {
    var _arguments2 = arguments,
      _this4 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var remote = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : 'origin';
      var branch = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 'main';
      try {
        yield _this4.executeGitCommand("git push ".concat(remote, " ").concat(branch));
      } catch (error) {
        console.error("Failed to push to ".concat(remote, "/").concat(branch), error);
        throw error;
      }
    })();
  }
  pullFromRemote() {
    var _arguments3 = arguments,
      _this5 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var remote = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : 'origin';
      var branch = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : 'main';
      try {
        yield _this5.executeGitCommand("git pull ".concat(remote, " ").concat(branch));
      } catch (error) {
        console.error("Failed to pull from ".concat(remote, "/").concat(branch), error);
        throw error;
      }
    })();
  }
  createBranch(name) {
    var _arguments4 = arguments,
      _this6 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var startPoint = _arguments4.length > 1 && _arguments4[1] !== undefined ? _arguments4[1] : 'HEAD';
      try {
        yield _this6.executeGitCommand("git checkout -b ".concat(name, " ").concat(startPoint));
      } catch (error) {
        console.error("Failed to create branch: ".concat(name), error);
        throw error;
      }
    })();
  }
  switchBranch(name) {
    var _this7 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this7.executeGitCommand("git checkout ".concat(name));
      } catch (error) {
        console.error("Failed to switch to branch: ".concat(name), error);
        throw error;
      }
    })();
  }
  getFileDiff(filePath) {
    var _this8 = this;
    return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var diff = yield _this8.executeGitCommand("git diff \"".concat(filePath, "\""));
        return diff;
      } catch (error) {
        console.error("Failed to get diff for file: ".concat(filePath), error);
        throw error;
      }
    })();
  }
}
var gitService = new GitService();

/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(660791)));
module.exports = __webpack_exports__;

})();
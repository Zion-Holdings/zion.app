import React, { useState, useEffect } from 'react';
import { gitService, GitStatus, GitBranch, GitRemote, GitCommit } from '../../services/gitService';

interface RepositoryInfo {
  name: string;
  remote: string;
  status: 'clean' | 'dirty' | 'ahead' | 'behind' | 'diverged';
}

const ChangesTab = () => {
  const [gitStatus, setGitStatus] = useState<GitStatus | null>(null);
  const [branches, setBranches] = useState<GitBranch[]>([]);
  const [remotes, setRemotes] = useState<GitRemote[]>([]);
  const [commitHistory, setCommitHistory] = useState<GitCommit[]>([]);
  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'changes' | 'history' | 'branches' | 'remotes'>('changes');
  const [commitMessage, setCommitMessage] = useState('');
  const [showCommitModal, setShowCommitModal] = useState(false);

  useEffect(() => {
    const fetchGitData = async () => {
      setIsLoading(true);
      try {
        const [status, branchesData, remotesData, commitsData] = await Promise.all([
          gitService.getStatus(),
          gitService.getBranches(),
          gitService.getRemotes(),
          gitService.getCommitHistory(10)
        ]);

        setGitStatus(status);
        setBranches(branchesData);
        setRemotes(remotesData);
        setCommitHistory(commitsData);

        // Determine repository status
        let repoStatus: RepositoryInfo['status'] = 'clean';
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
        console.error('Failed to fetch Git data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitData();
  }, []);

  const getStatusColor = (status: RepositoryInfo['status']) => {
    switch (status) {
      case 'clean': return 'text-green-400';
      case 'dirty': return 'text-yellow-400';
      case 'ahead': return 'text-blue-400';
      case 'behind': return 'text-orange-400';
      case 'diverged': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: RepositoryInfo['status']) => {
    switch (status) {
      case 'clean': return '✅';
      case 'dirty': return '⚠️';
      case 'ahead': return '⬆️';
      case 'behind': return '⬇️';
      case 'diverged': return '🔄';
      default: return '❓';
    }
  };

  const handleStageFile = async (filePath: string) => {
    try {
      await gitService.stageFile(filePath);
      // Refresh data
      const newStatus = await gitService.getStatus();
      setGitStatus(newStatus);
    } catch (error) {
      console.error('Failed to stage file:', error);
    }
  };

  const handleUnstageFile = async (filePath: string) => {
    try {
      await gitService.unstageFile(filePath);
      // Refresh data
      const newStatus = await gitService.getStatus();
      setGitStatus(newStatus);
    } catch (error) {
      console.error('Failed to unstage file:', error);
    }
  };

  const handleCommitChanges = async () => {
    if (!commitMessage.trim()) return;
    
    try {
      await gitService.commitChanges(commitMessage);
      setCommitMessage('');
      setShowCommitModal(false);
      
      // Refresh data
      const [newStatus, newCommits] = await Promise.all([
        gitService.getStatus(),
        gitService.getCommitHistory(10)
      ]);
      setGitStatus(newStatus);
      setCommitHistory(newCommits);
    } catch (error) {
      console.error('Failed to commit changes:', error);
    }
  };

  const handlePushChanges = async () => {
    try {
      await gitService.pushToRemote();
      // Refresh data
      const newStatus = await gitService.getStatus();
      setGitStatus(newStatus);
    } catch (error) {
      console.error('Failed to push changes:', error);
    }
  };

  const handlePullChanges = async () => {
    try {
      await gitService.pullFromRemote();
      // Refresh data
      const [newStatus, newBranches] = await Promise.all([
        gitService.getStatus(),
        gitService.getBranches()
      ]);
      setGitStatus(newStatus);
      setBranches(newBranches);
    } catch (error) {
      console.error('Failed to pull changes:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="h-64 bg-gray-800 rounded mb-4"></div>
            <div className="h-32 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Repository Changes
          </h1>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-400">Repository:</span>
            <span className="text-white font-mono">{repositoryInfo?.name}</span>
            <span className="text-gray-400">Branch:</span>
            <span className="text-white font-mono">{gitStatus?.branch}</span>
            <span className={`flex items-center space-x-2 ${getStatusColor(repositoryInfo?.status || 'clean')}`}>
              <span>{getStatusIcon(repositoryInfo?.status || 'clean')}</span>
              <span className="capitalize">{repositoryInfo?.status}</span>
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-800 p-1 rounded-lg">
          {[
            { id: 'changes', label: 'Changes', icon: '📝' },
            { id: 'history', label: 'History', icon: '📚' },
            { id: 'branches', label: 'Branches', icon: '🌿' },
            { id: 'remotes', label: 'Remotes', icon: '🌐' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'changes' | 'history' | 'branches' | 'remotes')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          {activeTab === 'changes' && (
            <div className="space-y-6">
              {/* Repository Status */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Repository Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">●</span>
                    <span className="text-gray-400">Staged:</span>
                    <span className="text-white">{gitStatus?.staged.length || 0} files</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">●</span>
                    <span className="text-gray-400">Modified:</span>
                    <span className="text-white">{gitStatus?.unstaged.length || 0} files</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">●</span>
                    <span className="text-gray-400">Untracked:</span>
                    <span className="text-white">{gitStatus?.untracked.length || 0} files</span>
                  </div>
                </div>
                {gitStatus?.ahead && gitStatus.ahead > 0 && (
                  <div className="mt-3 text-blue-400 text-sm">
                    ⬆️ {gitStatus.ahead} commits ahead of origin/{gitStatus.branch}
                  </div>
                )}
              </div>

              {/* Staged Changes */}
              {gitStatus?.staged.length > 0 && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Staged Changes</h3>
                  <div className="space-y-2">
                    {gitStatus.staged.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-600 rounded px-3 py-2">
                        <span className="text-white font-mono text-sm">{file.path}</span>
                        <button 
                          onClick={() => handleUnstageFile(file.path)}
                          className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors"
                        >
                          Unstage
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Unstaged Changes */}
              {gitStatus?.unstaged.length > 0 && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">Modified Files</h3>
                  <div className="space-y-2">
                    {gitStatus.unstaged.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-600 rounded px-3 py-2">
                        <span className="text-white font-mono text-sm">{file.path}</span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleStageFile(file.path)}
                            className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors"
                          >
                            Stage
                          </button>
                          <button className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors">
                            View Diff
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Untracked Files */}
              {gitStatus?.untracked.length > 0 && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Untracked Files</h3>
                  <div className="space-y-2">
                    {gitStatus.untracked.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-600 rounded px-3 py-2">
                        <span className="text-white font-mono text-sm">{file.path}</span>
                        <button 
                          onClick={() => handleStageFile(file.path)}
                          className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded hover:bg-gray-500 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-4 pt-4 border-t border-gray-600">
                <button 
                  onClick={() => setShowCommitModal(true)}
                  disabled={!gitStatus?.staged.length}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                >
                  Commit Changes
                </button>
                <button 
                  onClick={handlePushChanges}
                  disabled={!gitStatus?.ahead}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                >
                  Push to Origin
                </button>
                <button 
                  onClick={handlePullChanges}
                  disabled={!gitStatus?.behind}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                >
                  Pull from Origin
                </button>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Recent Commits</h3>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="space-y-3">
                  {commitHistory.map((commit) => (
                    <div key={commit.hash} className="flex items-start space-x-3 p-3 bg-gray-600 rounded">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{commit.message}</div>
                        <div className="text-gray-400 text-sm mt-1">
                          {commit.author} • {commit.date}
                        </div>
                        <div className="text-gray-500 font-mono text-xs mt-1">
                          {commit.hash}
                        </div>
                        {commit.files.length > 0 && (
                          <div className="text-gray-400 text-xs mt-2">
                            Files: {commit.files.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'branches' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Branches</h3>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="space-y-2">
                  {branches.map((branch) => (
                    <div 
                      key={branch.name}
                      className={`flex items-center justify-between p-3 rounded ${
                        branch.isCurrent 
                          ? 'bg-blue-600/20 border border-blue-500/30' 
                          : 'bg-gray-600'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className={branch.isCurrent ? 'text-blue-400' : 'text-gray-400'}>
                          {branch.isCurrent ? '●' : '○'}
                        </span>
                        <span className={`font-semibold ${branch.isCurrent ? 'text-white' : 'text-gray-300'}`}>
                          {branch.name}
                        </span>
                        {branch.isCurrent && (
                          <span className="text-blue-400 text-sm">(current)</span>
                        )}
                      </div>
                      <div className="text-right">
                        {branch.ahead > 0 && (
                          <div className="text-blue-400 text-sm">⬆️ {branch.ahead} ahead</div>
                        )}
                        {branch.behind > 0 && (
                          <div className="text-orange-400 text-sm">⬇️ {branch.behind} behind</div>
                        )}
                        {branch.ahead === 0 && branch.behind === 0 && (
                          <div className="text-green-400 text-sm">✓ Up to date</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                  Create New Branch
                </button>
              </div>
            </div>
          )}

          {activeTab === 'remotes' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Remote Repositories</h3>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="space-y-3">
                  {remotes.map((remote) => (
                    <div key={remote.name} className="flex items-center justify-between p-3 bg-gray-600 rounded">
                      <div>
                        <div className="text-white font-semibold">{remote.name}</div>
                        <div className="text-gray-400 text-sm">{remote.url}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm">Connected</div>
                        <div className="text-gray-400 text-xs">{remote.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                  Add Remote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Commit Modal */}
      {showCommitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Commit Changes</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Commit Message
                </label>
                <textarea
                  value={commitMessage}
                  onChange={(e) => setCommitMessage(e.target.value)}
                  placeholder="Enter commit message..."
                  className="w-full h-24 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCommitChanges}
                  disabled={!commitMessage.trim()}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-md transition-colors"
                >
                  Commit
                </button>
                <button
                  onClick={() => {
                    setShowCommitModal(false);
                    setCommitMessage('');
                  }}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangesTab;

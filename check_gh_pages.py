import urllib.request, json, sys
token = open('C:/Users/Zion/.gh_token').read().strip()
headers = {
    'Authorization': f'token {token}',
    'Accept': 'application/vnd.github+json'
}
req = urllib.request.Request('https://api.github.com/repos/Zion-support/zion-support.github.io/commits?sha=gh-pages&per_page=1', headers=headers)
data = json.load(urllib.request.urlopen(req))
commit = data[0]
print('sha:', commit['sha'][:12])
print('date:', commit['commit']['committer']['date'])
print('msg:', commit['commit']['message'][:120])

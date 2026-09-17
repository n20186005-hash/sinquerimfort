import json, urllib.parse, urllib.request
names=['People at Sinquerim Fort during sunset.jpg','Aguada Fort - Sinquerim Beach - Goa - 001.jpg','Sinquerim Beach, Goa.jpg','Fort Aguada, Goa, India.jpg']
for name in names:
    url='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','format':'json','titles':'File:'+name,'prop':'imageinfo','iiprop':'url','iiurlwidth':'1800'})
    data=json.load(urllib.request.urlopen(url))
    pages=data['query']['pages']; p=next(iter(pages.values()))
    print(name, p.get('imageinfo',[{}])[0].get('thumburl') or p.get('imageinfo',[{}])[0].get('url'))

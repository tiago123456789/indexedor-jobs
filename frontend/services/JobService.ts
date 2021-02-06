import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite'


export default class JobService {

    private algoliaClient: SearchClient;
    
    private index: SearchIndex;

    constructor() {
        this.algoliaClient = algoliasearch(
            // @ts-ignore
            process.env.ALGOLIA_APP_ID,
            // @ts-ignore
            process.env.ALGOLIA_APP_KEY
        );

        this.index = this.algoliaClient.initIndex("jobs");
    }

    search(typedValue: string, options: {})  {
        return this.index.search(typedValue, options)

    }

}
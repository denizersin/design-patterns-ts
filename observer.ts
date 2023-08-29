//! npx ts-node [path to file]

class Subscribe<SubType> {

    private subscribers: Set<(v: SubType) => void> = new Set<(v: SubType) => void>();

    subscribe(subscriber: (v: SubType) => void): () => void {
        this.subscribers.add(subscriber);
        return () => this.subscribers.delete(subscriber);
    }
    publish(data: SubType) {
        this.subscribers.forEach(subscriber => subscriber(data));
    }
}

interface Post {
    title: string;
    content: string;
    owner: string;
}

class Post extends Subscribe<Post> implements Post {
    constructor(public title: string, public content: string, public owner: string) {
        super();
        this.title = title;
        this.content = content;
        this.owner = owner;
    }

    setContent(content: string) {
        this.content = content;
        this.publish(this);
    }

}

const post = new Post('title', 'content', 'owner');
const unsb = post.subscribe((post) => { console.log('post changed', post); })
post.setContent('new content');
unsb();
post.setContent('new content2');

// post changed Post { title: 'title', content: 'new content', owner: 'owner' }
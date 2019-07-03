// https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23250:%20Merge%20Sorted%20Arrays&utm_medium=email&utm_medium=email&__s=qsde1mtpqbjvnnzzxqjz

class LinkedListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// class LinkedList {
// 	constructor() {
// 		this.front = null;
// 		this.back = null;
// 		this.length = 0;
// 	}
// }

// review LinkedList implementation

function kthToLastNode(k, headNode) {
	let listLength = 1;
	let node = headNode;

	while (node.next) {
		node = node.next;
		listLength++;
	}


	let index = listLength - k;

	let targetNode = headNode;
	while (index) {
		targetNode = targetNode.next
		index--;
	}

	return targetNode.value
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
// Returns the node with value "Devil's Food" (the 2nd to last node)

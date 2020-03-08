class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, key) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next.value !== key) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, tempNode.next)
    }
  }

  insertAfter(item, key) {
    if (this.head == null) {
      this.insertFirst(item)
    } else {
      let selector = this.head
      while (selector.value !== key) {
        selector = selector.next
      }
      selector.next = new _Node(item, selector.next)
    }
  }

  insertAt(item, idx) {
    if (this.head == null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      for(let i=2;i!==idx;i++) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, tempNode.next)
    }
  }

  find(item) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    return currNode
  }
  
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let previousNode = this.head
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }

  display() {
    let selector = this.head
    let list = []
    list.push(this.head.value)
    while (selector.next !== null) {
      selector = selector.next
      list.push(selector.value)
    }
    console.log(list)
    return list
  }

  size() {
    if (!this.head) {
      console.log(0)
      return 0
    }
    let selector = this.head
    let count = 1
    while (selector.next !== null) {
      count++
      selector = selector.next
    }
    return count
  }

  findPrevious(key) {
    let selector = this.head
    while (selector.next.value !== key) {
      selector = selector.next
    }
    return selector
  }

  findLast() {
    let selector = this.head
    while (selector.next) {
      selector = selector.next
    }
    return selector
  }

  reverse() {
    const selProg = this.head
    let selMover = this.findLast()
    this.insertFirst(selMover.value)
    let selAfter = this.head
    while (selProg.next) {
      selMover = this.head
        while (selMover.next.next) {
          selMover = selMover.next
        }
      selMover.next = null
      this.insertAfter(selMover.value, selAfter.value)
      selAfter = selAfter.next
    }
    this.remove(selProg.value)
  }

  thirdFromEnd() {
    let selector = this.head
    while (selector.next.next.next) {
      selector = selector.next
    }
    return selector
  }

  middle() {
    let selectorOne = this.head
    let selectorTwo = this.head

    while(selectorTwo.next) {
      selectorOne = selectorOne.next
      selectorTwo = selectorTwo.next.next
    }
    return selectorOne
  }

  loopIt() {
    let selector = this.findLast()
    selector.next = this.head
  }

  detectLoop() {
    const table = new Set()
    let selector = this.head
    while (selector.next) {
      if (table.has(selector)) {
        return true
      }
      table.add(selector)
      selector = selector.next
    }
    return false
  }

  //this function is showing some unexpected behaviors.
  sort() {
    let slowSelect = this.head
    let fastSelect = this.head
    while (slowSelect.next) {
      while (fastSelect.next) {
        fastSelect = fastSelect.next
        if (fastSelect.value < slowSelect.value) {
          let tempNode = this.head
          while (tempNode.next !== fastSelect) {
            tempNode = tempNode.next
          }
          this.insertBefore(fastSelect.value, slowSelect.value)
          tempNode.next = fastSelect.next
          fastSelect = this.head
          slowSelect = this.head
        } else {
          slowSelect = slowSelect.next
        }
      }
    }
  }
}



function main() {
  const SLL = new LinkedList()
  SLL.insertLast('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.remove('Husker')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')

  SLL.display()
  
  SLL.reverse()

  SLL.display()

  SLL.thirdFromEnd()
  SLL.middle()

  const CycleList = new LinkedList()
  CycleList.insertLast('One')
  CycleList.insertLast('Two')
  CycleList.insertLast('Three')
  CycleList.insertLast('Four')
  CycleList.loopIt()
  console.log(CycleList.detectLoop())

  const SortList = new LinkedList()
  SortList.insertLast(7)
  SortList.insertLast(4)
  SortList.insertLast(8)
  SortList.insertLast(1)
  SortList.insertLast(5)

  SortList.display()
  SortList.sort()
  SortList.display()
}

main()

/*
Mystery program: This program appears to remove duplicates
*/


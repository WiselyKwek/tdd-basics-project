def isPrime(n):
    if n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def binarySearch(arr, x):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def findPrimeNumbers(n):
    primeNumbers = []
    for i in range(2, n + 1):
        if isPrime(i):
            primeNumbers.append(i)
    return primeNumbers

print(findPrimeNumbers(100))

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

def depthFirstSearch(graph, start):
    visited = []
    stack = [start]
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.append(vertex)
            stack.extend(graph[vertex] - visited)
    return visited

def breadthFirstSearch(graph, start):
    visited = []
    queue = [start]
    while queue:
        vertex = queue.pop(0)
        if vertex not in visited:
            visited.append(vertex)
            queue.extend(graph[vertex] - visited)
    return visited

def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        key = arr[i]
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

print(insertionSort([1, 3, 2, 5, 4]))



class Node:
    def __init__(self, data):
        # Inicializamos un nodo con datos, un puntero al siguiente nodo (next) y al anterior nodo (prev)
        self.data = data
        self.next = None
        self.prev = None


class CircularDoublyLinkedList:
    def __init__(self):
        # Inicializamos la lista circular doblemente enlazada con un head vacío
        self.head = None

    def is_empty(self):
        # Verifica si la lista está vacía
        return self.head is None

    def insert_at_position(self, data, position):
        # Inserta un nuevo nodo en una posición específica
        new_node = Node(data)  # Creamos el nuevo nodo
        if self.is_empty():
            # Si la lista está vacía, el nodo se apunta a sí mismo (circularidad)
            new_node.next = new_node.prev = new_node
            self.head = new_node
        else:
            temp = self.head
            if position == 0:
                # Insertar al inicio de la lista
                new_node.next = self.head  # El siguiente del nuevo nodo es el head actual
                new_node.prev = self.head.prev  # El anterior del nuevo nodo es el último nodo
                self.head.prev.next = new_node  # El siguiente del último nodo apunta al nuevo nodo
                self.head.prev = new_node  # El anterior del head actual apunta al nuevo nodo
                self.head = new_node  # El nuevo nodo se convierte en el head
            else:
                # Insertar en una posición específica
                for _ in range(position - 1):
                    temp = temp.next
                    if temp == self.head:  # Si llegamos al final de la lista, salimos del bucle
                        break
                new_node.next = temp.next  # El siguiente del nuevo nodo apunta al nodo siguiente de temp
                new_node.prev = temp  # El anterior del nuevo nodo apunta al nodo temp
                temp.next.prev = new_node  # El anterior del nodo siguiente de temp apunta al nuevo nodo
                temp.next = new_node  # El siguiente de temp apunta al nuevo nodo

    def delete_first(self):
        # Elimina el primer nodo de la lista
        if self.is_empty():
            print("La lista está vacía.")
        elif self.head.next == self.head:
            # Si solo hay un nodo, simplemente vaciamos la lista
            self.head = None
        else:
            self.head.prev.next = self.head.next  # El siguiente del último nodo apunta al segundo nodo
            self.head.next.prev = self.head.prev  # El anterior del segundo nodo apunta al último nodo
            self.head = self.head.next  # El head ahora es el segundo nodo

    def delete_last(self):
        # Elimina el último nodo de la lista
        if self.is_empty():
            print("La lista está vacía.")
        elif self.head.next == self.head:
            # Si solo hay un nodo, simplemente vaciamos la lista
            self.head = None
        else:
            last = self.head.prev  # Obtenemos el último nodo
            last.prev.next = self.head  # El siguiente del penúltimo nodo apunta al head
            self.head.prev = last.prev  # El anterior del head apunta al penúltimo nodo

    def display_forward(self):
        # Muestra los elementos de la lista en dirección hacia adelante
        if self.is_empty():
            print("La lista está vacía.")
            return
        temp = self.head
        print("Lista en dirección hacia adelante:")
        while True:
            print(temp.data, end=" ")  # Imprimimos el dato del nodo actual
            temp = temp.next  # Avanzamos al siguiente nodo
            if temp == self.head:  # Si regresamos al head, salimos del bucle
                break
        print()

    def display_backward(self):
        # Muestra los elementos de la lista en dirección hacia atrás
        if self.is_empty():
            print("La lista está vacía.")
            return
        temp = self.head.prev  # Empezamos desde el último nodo
        print("Lista en dirección hacia atrás:")
        while True:
            print(temp.data, end=" ")  # Imprimimos el dato del nodo actual
            temp = temp.prev  # Retrocedemos al nodo anterior
            if temp.next == self.head:  # Si regresamos al nodo antes del head, salimos del bucle
                break
        print()


# Menú interactivo para operar con la lista
def menu():
    cdll = CircularDoublyLinkedList()  # Creamos una instancia de la lista circular doblemente enlazada
    while True:
        print("\n--- Menú ---")
        print("1. Insertar un elemento en una posición específica")
        print("2. Eliminar el primer elemento")
        print("3. Eliminar el último elemento")
        print("4. Mostrar elementos hacia adelante")
        print("5. Mostrar elementos hacia atrás")
        print("6. Salir")
        choice = int(input("Seleccione una opción: "))  # Solicitamos la elección del usuario

        if choice == 1:
            # Insertar un nuevo nodo
            data = int(input("Ingrese el dato a insertar: "))
            position = int(input("Ingrese la posición (0 para inicio): "))
            cdll.insert_at_position(data, position)
        elif choice == 2:
            # Eliminar el primer nodo
            cdll.delete_first()
        elif choice == 3:
            # Eliminar el último nodo
            cdll.delete_last()
        elif choice == 4:
            # Mostrar elementos hacia adelante
            cdll.display_forward()
        elif choice == 5:
            # Mostrar elementos hacia atrás
            cdll.display_backward()
        elif choice == 6:
            # Salir del programa
            print("¡Hasta luego!")
            break
        else:
            # Opción inválida
            print("Opción no válida. Intente de nuevo.")


# Punto de entrada del programa
if __name__ == "__main__":
    menu()  # Llamamos al menú para interactuar con el usuario

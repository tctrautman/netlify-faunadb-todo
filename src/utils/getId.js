export default function getId(todo) {
  if (!todo.ref) {
    return null;
  }

  return todo.ref["@ref"].id;
}

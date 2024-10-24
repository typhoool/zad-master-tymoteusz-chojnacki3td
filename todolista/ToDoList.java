class Todolist {
    private int id;
        private String name;
            private String description;
                private boolean isCompleted;

    public Todolist(int id, String name, String description, boolean isCompleted) {

        this.id = id;
        this.name = name;
        this.description = description;
        this.isCompleted = isCompleted;

    }

    public String getName() {

        return name;

    }

    public void setCompleted(boolean completed) {

        isCompleted = completed;

    }

    public String toString() {

        return (isCompleted ? "[x] " : "[ ] ") + name + ": " + description;

    }
}

"use strict";
// auto bind decorator
function autoBind(target, methodName, descriptor) {
    const originalMethod = descriptor.value();
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionElement = this.element.querySelector('#description');
        this.peopleElement = this.element.querySelector('#people');
        this.attach();
        this.configure();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
}
const projectInput = new ProjectInput();
console.log('running project input');

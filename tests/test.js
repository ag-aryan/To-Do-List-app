/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML and JS to simulate a browser environment
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
document.body.innerHTML = html;

require('../src/script.js');

describe('To-Do List App', () => {
    beforeEach(() => {
        document.getElementById('todo-list').innerHTML = '';
        document.getElementById('todo-input').value = '';
    });

    test('adds a new task to the list', () => {
        const input = document.getElementById('todo-input');
        input.value = 'Test Task';

        const addButton = document.getElementById('add-btn');
        addButton.click();

        const tasks = document.querySelectorAll('.todo-item');
        expect(tasks.length).toBe(1);
        expect(tasks[0].querySelector('span').textContent).toBe('Test Task');
    });

    test('deletes a task from the list', () => {
        const input = document.getElementById('todo-input');
        input.value = 'Test Task';

        const addButton = document.getElementById('add-btn');
        addButton.click();

        const deleteButton = document.querySelector('.delete-btn');
        deleteButton.click();

        const tasks = document.querySelectorAll('.todo-item');
        expect(tasks.length).toBe(0);
    });
});

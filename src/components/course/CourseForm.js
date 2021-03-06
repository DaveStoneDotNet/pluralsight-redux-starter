import React from 'react';

import TextInput   from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
    return (
        <form>
            <h1>
                Manage Course
            </h1>
            <TextInput   name="title"    label="Title"    value={course.title}    onChange={onChange} error={errors.title} />
            <TextInput   name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
            <TextInput   name="length"   label="Length"   value={course.length}   onChange={onChange} error={errors.length} />
            <SelectInput name="authorId" label="Author"   value={course.authorId} onChange={onChange} error={errors.category} defaultOption="Select Author" options={allAuthors} />
            <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'} className="btn btn-primary" onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
                           course:     React.PropTypes.object.isRequired,
                           allAuthors: React.PropTypes.array, 
                           onSave:     React.PropTypes.func.isRequired, 
                           onChange:   React.PropTypes.func.isRequired, 
                           saving:     React.PropTypes.bool, 
                           errors:     React.PropTypes.object.isRequired
                       };

export default CourseForm;
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  render() {
    return <form>
      <Field name="title" />
    </form>;
  }
}
export default reduxForm({ form: 'streamCreate' })(StreamCreate);

import React, { Component } from 'react';
import { Form as FromikForm, Formik } from 'formik';

class Form extends Component {
  static defaultProps = {
    initialValues: {},
    enableReinitialize: false,
  };
  onSubmit = (values) => {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  render() {
    const { initialValues, enableReinitialize, children, className } = this.props;
    return (
      <div className={className}>
        <Formik onSubmit={this.onSubmit} initialValues={initialValues} enableReinitialize={enableReinitialize}>
          {() => <FromikForm>{children}</FromikForm>}
        </Formik>
      </div>
    );
  }
}
export default Form;

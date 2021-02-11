import React, {useRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Form = ({
  register,
  errors,
  setValue,
  rules,
  children,
  trigger,
  style,
}) => {
  const Inputs = useRef([]);

  return (
    <View style={[styles.container, style]}>
      {(Array.isArray(children) ? [...children] : [children]).map(
        (child, i) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  key: child.props.name,
                  blurOnSubmit: false,
                  error: errors[child.props.name],
                  rules: rules,
                  setValue: setValue,
                  trigger: trigger,
                  ref: (ref) => {
                    register({name: child.props.name}, rules[child.props.name]);
                    Inputs.current[i] = ref;
                  },
                  onSubmitEditing: () => {
                    Inputs.current[i + 1]
                      ? Inputs.current[i + 1] && Inputs.current[i + 1].focus()
                      : Inputs.current[i] && Inputs.current[i].blur();
                  },
                },
              })
            : child;
        },
      )}
    </View>
  );
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  trigger: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Form;

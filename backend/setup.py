from setuptools import setup, find_namespace_packages

settings = {
    'name': 'ClownEntertainment-Common',
    'description': 'ClownEntertainment common',
    'zip_safe': False,
    'include_package_data': True,
    'packages': find_namespace_packages(include=('.*',)),
    'entry_points': {
        'console_scripts': [
            'website = clownentertainment.website:main'
        ],
    },
    'install_requires': [
        'starlette',
        'uvicorn',
    ],
}


def main():
    setup(**settings)


if __name__ == '__main__':
    main()